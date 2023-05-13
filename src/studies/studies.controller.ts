import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { StudiesService } from './studies.service';
import { CreateStudyDto } from './dto/create-study.dto';
import { UpdateStudyDto } from './dto/update-study.dto';
import { Private, Public } from 'src/auth/auth.decorator';

@Controller('studies')
export class StudiesController {
  constructor(private readonly studiesService: StudiesService) {}

  @Private()
  @Post()
  create(@Body() createStudyDto: CreateStudyDto) {
    return this.studiesService.create(createStudyDto);
  }

  @Public()
  @Get()
  findAll() {
    return this.studiesService.findAll();
  }

  @Public()
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.studiesService.findOne(+id);
  }

  @Private()
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStudyDto: UpdateStudyDto) {
    return this.studiesService.update(+id, updateStudyDto);
  }

  @Private()
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.studiesService.remove(+id);
  }
}
