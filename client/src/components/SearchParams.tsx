import { ChangeEvent, useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useFormik } from 'formik'
import { Theme, useTheme } from '@mui/material/styles'
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Chip,
  MenuItem,
  Pagination,
  TextField,
  Typography,
} from '@mui/material'
import ManageSearchIcon from '@mui/icons-material/ManageSearch'
import CancelIcon from '@mui/icons-material/Cancel'
import * as yup from 'yup'

import STATES from '../lib/constants/STATES.json'
import { CODES } from '../lib/constants/codes'
import { UNITS } from '../lib/constants/units'
import { STATES_MUNICIPALITIES } from '../lib/constants/statesGroups'
import { getAllHospitals } from '../helpers/APIcalls/hospitals'

import Hospital from './Hospital'
import { HospitalsList } from '../interface/Hospital'

interface SearchParams {
  address: {
    state: string
    municipality: string
  }
  institution: {
    code: string
    type?: string
  }
}

const validationSchema: yup.SchemaOf<typeof SearchParams> = yup.object().shape({
  address: yup.object({
    state: yup.string().required('Requerido'),
    municipality: yup.string().required('Requerido'),
  }),
  institution: yup.object({
    code: yup.array().of(yup.string().required('Requerido')),
    type: yup.string(),
  }),
})

function SearchParams() {
  const [hospitals, setHospitals] = useState<HospitalsList>()
  const [page, setPage] = useState(1)
  const [searchParams, setSearchParams] = useSearchParams()

  const theme = useTheme()

  const formik = useFormik({
    initialValues: {
      address: {
        state: '',
        municipality: '',
      },
      institution: {
        code: [],
        type: '',
      },
    },
    validationSchema,
    onSubmit(values, actions) {
      let params = { ...values.address, ...values.institution }

      setSearchParams(params)
      actions.setSubmitting(false)
    },
  })

  useEffect(() => {
    async function getHospitals() {
      const allHospitals = await getAllHospitals(
        page,
        10,
        searchParams.toString(),
      )
      setHospitals(allHospitals)
    }

    getHospitals()
  }, [page, searchParams])

  function handleChange(event: ChangeEvent<unknown>, page: number): void {
    setPage(page)
  }

  return (
    <Box
      sx={{
        display: 'grid',
        gridAutoFlow: 'row',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: 2,
        margin: '4rem',
      }}
    >
      <Box sx={{ gridColumn: '1 / 3' }}>
        <Pagination
          count={hospitals?.totalPages}
          size="large"
          page={page || 1}
          onChange={handleChange}
          color="primary"
          sx={{ display: 'flex', justifyContent: 'center', padding: '1rem' }}
        ></Pagination>
        {hospitals?.data?.map((hospital) => (
          <Hospital hospital={hospital} key={hospital.code} />
        ))}
      </Box>
      <Box sx={{ gridColumn: '3 / 4' }}>
        <Box display="flex" flexDirection="row">
          <ManageSearchIcon color="secondary" fontSize="large" />
          <Typography variant="h4" component="div" color="secondary">
            Buscar hospitales
          </Typography>
        </Box>
        <form onSubmit={formik.handleSubmit}>
          <Card
            variant="outlined"
            style={{
              borderColor: theme.palette.secondary.light,
            }}
          >
            <CardContent>
              <TextField
                id="address-state"
                label="Estado"
                {...formik.getFieldProps('address.state')}
                error={
                  formik.touched?.address?.state &&
                  Boolean(formik.errors?.address?.state)
                }
                helperText={formik.errors?.address?.state}
                margin="dense"
                fullWidth
                select
              >
                {STATES.map((state, index) => (
                  <MenuItem value={state.value} key={index}>
                    {state.value}
                  </MenuItem>
                ))}
              </TextField>
              {formik.values.address.state && (
                <TextField
                  id="address-municipality"
                  label="Municipio"
                  {...formik.getFieldProps('address.municipality')}
                  error={
                    formik.touched?.address?.municipality &&
                    Boolean(formik.errors?.address?.municipality)
                  }
                  helperText={formik.errors?.address?.municipality}
                  margin="dense"
                  fullWidth
                  select
                >
                  {STATES_MUNICIPALITIES[formik.values?.address?.state].map(
                    (municipality: string, index: number) => (
                      <MenuItem value={municipality} key={index}>
                        {municipality}
                      </MenuItem>
                    ),
                  )}
                </TextField>
              )}
              <TextField
                id="institution-code"
                label="Institución"
                error={
                  formik.touched?.institution?.code &&
                  Boolean(formik.errors?.institution?.code)
                }
                helperText={formik.errors?.institution?.code}
                margin="dense"
                fullWidth
                SelectProps={{
                  autoWidth: true,
                  multiple: true,
                  ...formik.getFieldProps('institution.code'),
                  renderValue: (selected: any) => (
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                      {selected?.map((value: string) => (
                        <Chip
                          key={value}
                          label={value}
                          clickable
                          deleteIcon={
                            <CancelIcon
                              onMouseDown={(event) => event.stopPropagation()}
                            />
                          }
                          onDelete={(event) => {
                            event.preventDefault(),
                              formik.setFieldValue(
                                'institution.code',
                                formik.values.institution.code.filter(
                                  (selectedValue: string) =>
                                    selectedValue !== value,
                                ),
                              )
                          }}
                        />
                      ))}
                    </Box>
                  ),
                }}
                select
              >
                {Object.keys(CODES).map((code, index) => (
                  <MenuItem value={code} key={index}>
                    {code}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                id="institution-type"
                label="Tipo"
                {...formik.getFieldProps('institution.type')}
                error={
                  formik.touched?.institution?.type &&
                  Boolean(formik.errors?.institution?.type)
                }
                helperText={formik.errors?.institution?.type}
                margin="dense"
                fullWidth
                select
              >
                {UNITS.map((unit, index) => (
                  <MenuItem value={unit} key={index}>
                    {unit}
                  </MenuItem>
                ))}
              </TextField>
            </CardContent>
            <CardActions>
              <Button
                size="large"
                variant="contained"
                color="secondary"
                type="submit"
                fullWidth
              >
                Buscar
              </Button>
            </CardActions>
          </Card>
        </form>
      </Box>
    </Box>
  )
}

export default SearchParams
